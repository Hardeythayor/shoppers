import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

//  show toaster
export const errorNotify = (message) => toast.error(message, {
    autoClose: 3000,
    hideProgressBar: true,
    theme: "colored",
});

export const successNotify = (message) => toast.success(message, {
    autoClose: 3000,
    hideProgressBar: true,
    theme: "colored",
});