import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LS } from 'src/app/constantes/app-constants/ls';
import { ApiRequestService } from '../utils/api-request/api-request.service';
import { UtilService } from '../utils/util/util.service';

@Injectable({
  providedIn: 'root'
})
export class LocateMeService {

  constructor(
    private api: ApiRequestService,
    private toastr: ToastrService,
    private utilService: UtilService
  ) { }

  buscarUbicacion(parametro, contexto) {
    this.api.post('locate-me', parametro).then(
      (data) => {
        if (data && data.extraInfo) {
          contexto.despuesDeBuscarUbicacion(data.extraInfo);
        } else {
          this.toastr.warning(data.operacionMensaje, LS.TAG_AVISO);
          contexto.despuesDeBuscarUbicacion([]);
        }
      }
    ).catch(err => this.utilService.handleError(err, contexto));
  }
}
