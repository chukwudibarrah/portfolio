import { ToastContainer } from 'react-toastify';

export default function Toast() {
  return (
    <ToastContainer
      position="top-0 right-0"
      outoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
  );
}