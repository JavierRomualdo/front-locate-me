import { Component, OnInit } from '@angular/core';
import { LocateMeService } from 'src/app/servicios/locateMe/locate-me.service';
import { UtilService } from 'src/app/servicios/utils/util/util.service';
import { WebsocketService } from 'src/app/servicios/websocket/websocket.service';
import { LS } from 'src/app/constantes/app-constants/ls';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public password: string = "";
  public codigo: string = "";
  public cargando: boolean = false;

  // Mapa
  public latitude: number = -5.196395;
  public longitude: number = -80.630287;
  public latitudeuser: number = null;
  public longitudeuser: number = null;
  public zoom: number = 13;

  constructor(
    private locateMeService: LocateMeService,
    public utilService: UtilService,
    private wsService: WebsocketService,
  ) {
    this.selectPositionUsuario();
  }

  ngOnInit(): void {
    // this.esucharSockets();
  }

  esucharSockets() {
    /**el listen "locate-me" debe ser el mismo nombre en el
     * sockets del backend de java (on), si cambias el nombre de backend
     * aqui solo cambias el "locate-me" por ese nombre
     */
    this.wsService.listen('locate-me')
    .subscribe((parametros: any) => {
      // parametros (es la data que se envia el socket del backend)
      // en este caso me supongo que tiene {codigo, lat, lng }
      // lo puedes cambiar de acuerdo a que la data que lo envias.
      const { codigo, lat, lng } = parametros;
      if (this.codigo == codigo) {
        // actualizo el marcador con lng y lat que ha sido obtenido
        this.longitudeuser = lng;
        this.latitudeuser = lat;
      }
      // aca la condicion
    });
  }

  localizar() {
    if (this.codigo && this.password) {
      this.cargando = true;
      const parametros = {
        codigo: this.codigo,
        password: this.password
      };
      this.locateMeService.buscarUbicacion(parametros, this);
    }
  }

  despuesDeBuscarUbicacion(data) {
    this.cargando = false;
    // si tu data que consultastes es {lat, lng } lo dejas
    // sino lo poner como esta enviando del backend
    // por el momento supongo que sera esos datos
    const { lat, lng } = data;
    this.longitudeuser = lng;
    this.latitudeuser = lat;
    // la data que recogo del backend
  }

  // Mapa
  selectPositionUsuario() {
    if (navigator) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( pos => {
          this.longitudeuser = pos.coords.longitude;
          this.latitudeuser = pos.coords.latitude;
          this.longitude = this.longitudeuser;
          this.latitude = this.latitudeuser;
        });
      } else {
        this.longitudeuser = this.longitude;
        this.latitudeuser = this.latitude;
      }
    }
  }
}
