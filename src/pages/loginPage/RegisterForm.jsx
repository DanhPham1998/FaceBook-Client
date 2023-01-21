import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import InputField from "components/form-control/InputField";
import PasswordField from "components/form-control/PasswordField";
import FlexBetween from "components/wrapBox/FlexBetween";
import { useFormik } from "formik";
import Dropzone, { useDropzone } from "react-dropzone";
import * as yup from "yup";

function RegisterForm(props) {
    const { theme } = props;

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            location: "",
            occupation: "",
            picture: "",
        },
        validationSchema: yup.object({
            firstName: yup.string().required("required"),
            lastName: yup.string().required("required"),
            email: yup.string().email("invalid email").required("required"),
            password: yup.string().required("required"),
            location: yup.string().required("required"),
            occupation: yup.string().required("required"),
            picture: yup.string().required("required"),
        }),
        onSubmit: (values) => {
            console.log("vals", values);
        },
    });

    // const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    //     accept: {
    //         "image/png": [".png"],
    //         "text/html": [".html", ".htm"],
    //     },
    // });

    // const acceptedFileItems = acceptedFiles.map((file, index) => (
    //     <li key={file.path}>
    //         {index}
    //         {file.path} - {file.size} bytes
    //     </li>
    // ));

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputField
                        name="firstName"
                        label="Firs Name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        error={Boolean(formik.touched.firstName) && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    ></InputField>
                </Grid>
                <Grid item xs={6}>
                    <InputField
                        name="lastName"
                        label="Last Name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        error={Boolean(formik.touched.lastName) && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        name="location"
                        label="Location"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.location}
                        error={Boolean(formik.touched.location) && Boolean(formik.errors.location)}
                        helperText={formik.touched.location && formik.errors.location}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        name="occupation"
                        label="Occupation"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.occupation}
                        error={Boolean(formik.touched.occupation) && Boolean(formik.errors.occupation)}
                        helperText={formik.touched.occupation && formik.errors.occupation}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <Box border={`2px solid ${theme.palette.neutral.medium}`} borderRadius="5px" p="1rem">
                        <Dropzone
                            multiple={false}
                            onDrop={(acceptedFiles) => {
                                // console.log(acceptedFiles);
                                return formik.setFieldValue("picture", acceptedFiles[0]);
                            }}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <Box
                                    {...getRootProps()}
                                    border={`2px dashed ${theme.palette.primary.main}`}
                                    p="1rem"
                                    sx={{ "&:hover": { cursor: "pointer" } }}
                                >
                                    <input {...getInputProps()} />
                                    {!formik.values.picture ? (
                                        <p>Add Picture here</p>
                                    ) : (
                                        <FlexBetween>
                                            <Typography>{formik.values.picture.name}</Typography>
                                            <EditOutlined />
                                        </FlexBetween>
                                    )}
                                </Box>
                            )}
                        </Dropzone>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        name="email"
                        label="Email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={Boolean(formik.touched.email) && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <PasswordField
                        name="password"
                        label="Password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={Boolean(formik.touched.password) && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    ></PasswordField>
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.alt,
                    "&:hover": { color: theme.palette.primary.main },
                }}
            >
                REGISTER
            </Button>
            <Typography
                sx={{
                    textDecoration: "underline",
                    color: theme.palette.primary.main,
                    "&:hover": {
                        cursor: "pointer",
                        color: theme.palette.primary.light,
                    },
                }}
            >
                Already have an account? Login here.
            </Typography>
        </form>
    );
}

export default RegisterForm;
