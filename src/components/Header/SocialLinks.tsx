const SocialLinks = () => {
  return (
    <nav class="social-links block">
      <a href="https://github.com/mxsrdesu" target="_blank" class="social-link">
        <i class="fa-brands fa-github"></i>
        <span>Github</span>
      </a>
      <a href="https://linkedin.com/in/mxsrdesu" target="_blank" class="social-link">
        <i class="fa-brands fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a href="https://t.me/mxsrdesu" target="_blank" class="social-link">
        <i class="fa-brands fa-telegram"></i>
        <span>Telegram</span>
      </a>
      <a href="https://leetcode.com/mxsrdesu" target="_blank" class="social-link">
        <i class="fa-solid fa-code"></i>
        <span>LeetCode</span>
      </a>
      <a href="https://www.codewars.com/users/mxsrdesu" target="_blank" class="social-link">
        <i class="fa-solid fa-code-branch"></i>
        <span>Codewars</span>
      </a>
      <a href="mailto:maxim.sirenev@icloud.com" class="social-link">
        <i class="fa-solid fa-envelope"></i>
        <span>Mail</span>
      </a>
      <a href="/cv.pdf" target="_blank" class="social-link cv-link">
        <i class="fa-solid fa-file-lines"></i>
        <span>CV</span>
        <span class="cv-status">Open for work</span>
      </a>
    </nav>
  );
};

export default SocialLinks; 