<script>
{/* // TOP 버튼 기능 */}
document.getElementById("topBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

{/* // BACK 버튼 기능 */}
document.getElementById("backBtn").addEventListener("click", function () {
  if (document.referrer) {
    window.history.back(); // 이전 페이지로 이동
  } else {
    window.close(); // 창 닫기 (팝업일 경우)
  }
});
</script>