import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ZoomControlOptions, FullscreenControlOptions, ControlPosition, 
  ZoomControlStyle, ScaleControlOptions, ScaleControlStyle, PanControlOptions, 
  StreetViewControlOptions } from '@agm/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  handleError(error: any, contexto?) {
    contexto && (contexto.cargando = false);
    switch (error.status) {
      case 401:
      case 403:
        this.toastr.warning('No autorizado', 'Aviso');
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['/']);
        break;
      case 404:
        this.toastr.warning('página solicitada no se encuentra', 'Aviso');
        break;
      case 0:
        this.toastr.warning("No hay conexión con el servidor.", 'Aviso');
        break;
      default:
        this.toastr.error(error.message || error, 'Error');
        break;
    }
  }

  mostrarMensaje(tipomensaje: string, mensaje: string, title: string) {
    switch (tipomensaje) {
      case 'info':
        this.toastr.info(mensaje, title);
        break;
      case 'warning':
        this.toastr.warning(mensaje, title);
        break;
      case 'error':
        this.toastr.error(mensaje, title);
        break;
      default:
        break;
    }
  }

  // Mapa
  fullscreenControlOptions: FullscreenControlOptions = {
    position : ControlPosition.TOP_RIGHT
  };

  zoomControlOptions: ZoomControlOptions = {
    position: ControlPosition.RIGHT_TOP,
    style: ZoomControlStyle.LARGE
  };

  streetViewControlOptions: StreetViewControlOptions = {
    position: ControlPosition.RIGHT_TOP
  }

  scaleControlOptions: ScaleControlOptions = {
    style: ScaleControlStyle.DEFAULT
  }

  panControlOptions: PanControlOptions = {
    position: ControlPosition.LEFT_TOP,
  }
}
