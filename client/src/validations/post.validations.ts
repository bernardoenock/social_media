import * as yup from "yup";

export const PostSchema = yup.object().shape({
  autor: yup
    .string()
    .required("Autor do post não informado")
    .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
  category: yup.string().required("Categoria não selecionada"),
  publication: yup.string(),
});
