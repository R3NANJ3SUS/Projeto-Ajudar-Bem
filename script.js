<script>
document.addEventListener("DOMContentLoaded", () => {
const botao = document.getElementById("alto-contraste");
if (botao) {
botao.addEventListener("click", () => {
document.body.classList.toggle("alto-contraste");
});
}
});
</script>