import Swal from "sweetalert2";

const swalWithBasicOptions = (title: string, html: string) =>
  Swal.mixin({
    title,
    html,
    focusConfirm: false,
    cancelButtonText: 'Cancelar',
    showCancelButton: true
  });

export async function formBasicDialog(
    title: string,
    html: string
  ) {
    return await swalWithBasicOptions(title, html).fire({
      preConfirm: () => {
        let error = '';
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        if (!nombre) {
          error += 'El nombre del equipo es obligatorio';
        }
        const valorMaximo = (document.getElementById('valorMaximo') as HTMLInputElement).value;
        if (!valorMaximo) {
          error += 'El valor máximo es obligatorio';
        }
        if (error !== '') {
          Swal.showValidationMessage(error);
          return;
        }
        return {
          nombre,
          valorMaximo
        };
      },
    });
  }

export async function optionsWithDetails(
    title: string, 
    html: string, 
    width: number | string,
    confirmButtonText: string,
    cancelButtonText: string
    ) {
    return await Swal.fire({
        title,
        html,
        width: `${ width }px`,
        showCancelButton: true,
        confirmButtonColor: '#6C757D',
        cancelButtonColor: '#DC3545',
        confirmButtonText,
        cancelButtonText
    }).then((result) => {
        if (result.value) {
          return true;
        } else if (result.dismiss?.toString() === 'cancel') {
          return false;
        }
      });
}