import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class sweetalert {
  constructor() {
    this.$swal = withReactContent(swal);
  }

  warning(s) {
    this.fire({
      text: s,
      icon: "warning",
      confirmButtonText: "확인",
    });
  }

  error(s) {
    this.fire({
      text: s,
      icon: "error",
      confirmButtonText: "확인",
    });
  }
  showError(s) {
    this.fire(s);
  }

  success(s) {
    this.fire({
      text: s,
      icon: "success",
      confirmButtonText: "확인",
      onClose: () => {},
    });
  }

  confirm(s, callback) {
    this.fire({
      text: s,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: ["네"],
      cancelButtonText: ["아니오"],
    }).then(callback);
  }

  close() {
    return this.$swal.close();
  }

  fire(f) {
    return this.$swal.fire({
      ...f,
      target: document.getElementById("swal-container-custom"),
    });
  }

  getContent() {
    return this.$swal.getContent();
  }

  isVisible() {
    return this.$swal.isVisible();
  }
}

export default sweetalert;
