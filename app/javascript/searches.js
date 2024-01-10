document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchList = document.getElementById('searchList');

    searchInput.addEventListener('input', debounce(recordSearch, 300));

    function debounce(func, delay) {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
      };
    }

    async function recordSearch() {
      const query = searchInput.value.trim();
      if (query) {
        await fetch('/searches', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
          },
          body: JSON.stringify({ query }),
        });
      }
    }
  });
