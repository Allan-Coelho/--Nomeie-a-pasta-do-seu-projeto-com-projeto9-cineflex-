import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { idFilme } = useParams();
  console.log(idFilme);
}
