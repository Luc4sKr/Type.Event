const URL = "http://127.0.0.1:8000/eventos/inscrever_evento/";

function copyLink(id) {
    let new_url = URL + `${id}/`
    navigator.clipboard.writeText(new_url);
    console.log("Copiado")
}