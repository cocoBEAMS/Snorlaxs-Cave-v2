function apps(url) {
    window.navigator.serviceWorker.register('/sw.js', {
      scope: __uv$config.prefix
  }).then(() => {
      localStorage.setItem('agUrl', location.href=__uv$config.prefix + __uv$config.encodeUrl(url));
      location.href = '/dashboard';
  });
  }
  
  function openLink(url) {
    apps('https://' + url);
  }
  
  function ourDiscord() {
      window.location.href = 'https://discord.gg/snorlaxscave';
  }
  
  
  function patreon() {
      window.location.href = 'https://patreon.com/SnorlaxCave';
  }
  
  function email() {
      window.location.href = 'birdy@snorlaxscave.site';
  }
  
  function ourgithub() {
      window.location.href = 'https://github.com/Snorlaxs-Cave/Snorlaxs-Cave-v2';
  }
  
  function bgChange(color) {
      localStorage.setItem("color", color)
      window.location = window.location
  }
  
  function setImageBackground() {
      var url = document.getElementById('imageUrl').value;
      localStorage.setItem("backgroundImage", url);
      window.location.reload();
  }
  function setName() {
      const input = document.getElementById('name');
      const newTabName = input.value;
  
      document.title = newTabName;
      localStorage.setItem('tabName', newTabName);
    }
