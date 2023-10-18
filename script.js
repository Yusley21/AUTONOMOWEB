window.addEventListener('load', function() {
    fetch('graduates.json')
      .then(response => response.json())
      .then(data => {
        var graduatesList = document.getElementById('graduates-list');
        data.graduates.forEach(function(graduate) {
          var graduateDiv = document.createElement('div');
          graduateDiv.classList.add('graduate');
  
          var idParagraph = document.createElement('p');
          idParagraph.textContent = 'ID: ' + graduate.id;
  
          var nameHeading = document.createElement('h2');
          nameHeading.textContent = graduate.nombre;
  
          var ageParagraph = document.createElement('p');
          ageParagraph.textContent = 'Edad: ' + graduate.edad;
  
          var majorParagraph = document.createElement('p');
          majorParagraph.textContent = 'Carrera: ' + graduate.carrera;
  
          var universityParagraph = document.createElement('p');
          universityParagraph.textContent = 'Universidad: ' + graduate.universidad;
  
          var graduationYearParagraph = document.createElement('p');
          graduationYearParagraph.textContent = 'Año de graduación: ' + graduate.año_de_graduacion;
  
          var emailParagraph = document.createElement('p');
          emailParagraph.textContent = 'Email: ' + graduate.email;
  
          var phoneParagraph = document.createElement('p');
          phoneParagraph.textContent = 'Teléfono: ' + graduate.telefono;
  
          var addressParagraph = document.createElement('p');
          addressParagraph.textContent = 'Dirección: ' + graduate.direccion.calle + ', ' + graduate.direccion.ciudad + ', ' + graduate.direccion.pais;
  
          graduateDiv.appendChild(idParagraph);
          graduateDiv.appendChild(nameHeading);
          graduateDiv.appendChild(ageParagraph);
          graduateDiv.appendChild(majorParagraph);
          graduateDiv.appendChild(universityParagraph);
          graduateDiv.appendChild(graduationYearParagraph);
          graduateDiv.appendChild(emailParagraph);
          graduateDiv.appendChild(phoneParagraph);
          graduateDiv.appendChild(addressParagraph);
  
          graduatesList.appendChild(graduateDiv);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });
