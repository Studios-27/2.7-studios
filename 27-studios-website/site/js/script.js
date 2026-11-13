const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
    menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
    document.getElementById('year').textContent=new Date().getFullYear();
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    document.getElementById('contactForm').addEventListener('submit',e=>{
      e.preventDefault();
      const name=document.getElementById('name').value.trim(),email=document.getElementById('email').value.trim(),service=document.getElementById('service').value.trim(),message=document.getElementById('message').value.trim();
      const subject=encodeURIComponent('Project inquiry — '+(service||'2.7 Studios'));
      const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nService: '+service+'\n\nProject details:\n'+message);
      window.location.href='mailto:2.7studiosbysani@gmail.com?subject='+subject+'&body='+body;
    });
