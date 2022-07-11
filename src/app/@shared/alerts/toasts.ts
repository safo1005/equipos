import Swal from 'sweetalert2';
import { TYPE_ALERT } from './values.config';

export function basicAlert(icon = TYPE_ALERT.ERROR, title = '')  {
    Swal.fire({
        title,
        icon,
        position: 'top',
        confirmButtonText: 'Genial!',
        showConfirmButton: false,
        timer: 3000,
        toast: true
    });
}

