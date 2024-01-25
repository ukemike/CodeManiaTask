import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required"),
});

export const registerSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required"),
});

export const changePasswordSchema = yup.object().shape({
    oldPassword: yup.string().required("Old password is required"),
    newPassword: yup.string().required("New password is required"),
});