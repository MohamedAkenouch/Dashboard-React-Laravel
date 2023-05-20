import Swal from 'sweetalert2';

export function sweetModal(icon, title, showConfirmButton, timer) {
    return (
        Swal.fire({
            icon: icon,
            title: title,
            showConfirmButton:  showConfirmButton,
            timer: timer ? timer : 1250
        })
    ); 
}