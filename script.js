document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.site-header').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.site-header').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const email='YOUR-EMAIL@example.com'; // Replace with the official Swift Travel and Tours email.
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const destination=document.getElementById('destination').value.trim();
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent('Swift Travel and Tours Travel Inquiry');
  const body=encodeURIComponent(`Name: ${name}\nPhone/WhatsApp: ${phone}\nDestination: ${destination}\n\nMessage:\n${message}`);
  window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
});