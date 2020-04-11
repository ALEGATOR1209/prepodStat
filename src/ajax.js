function ajax() {
  // javascript-код голосования из примера
  // (1) создать объект для запроса к серверу
  var req = new XMLHttpRequest();  
       
  // (2)
  // span рядом с кнопкой
  // в нем будем отображать ход выполнения
//  var statusElem = document.getElementById('vote_status'); 
	
  req.onreadystatechange = function() {  
    // onreadystatechange активируется при получении ответа сервера

    if (req.readyState == 4) { 
      // если запрос закончил выполняться

//      statusElem.innerHTML = req.statusText; // показать статус (Not Found, ОК..)

      if(req.status == 200) { 
        // если статус 200 (ОК) - выдать ответ пользователю
        const json = JSON.parse(req.responseText);
        const educationValues = [];
        Object.entries(json.задоволення_відповіді).forEach(([key, val]) => {
          educationValues[parseInt(key)] = val;
        });
        linearDiagram(('education_rate'), educationValues);
            
        const knowledgeValues = [];
        Object.entries(json.самооцінка_відповіді).forEach(([key, val]) => {
          knowledgeValues[parseInt(key) - 1] = val;
        });
        linearDiagram(('knowledge_rate'), knowledgeValues);
            
        const radialData = [
          json.доступність_матеріалів + 1,
          json.перелік_питань + 1,
          json.відповідність_завдань + 1,
          json.РСО + 1,
          json.перенесення + 1,
          json.організація_часу + 1,
          json.змістовна_якість + 1,
          json.вимогливість + 1,
          json.коректність + 1,
          json.інформування + 1,
          json.задоволення + 1
        ];

        radialDiagram(radialData);

        updateNumbers(Math.round(json.подовження_контракту * 10) / 10, 
          Math.round(json.викладача_чути * 10) / 10, 
          json.опитаних, 
          100
        );

        updatePrepod(json.name, 'https://lh3.googleusercontent.com/proxy/zM_Qr1wPfJuv4HEUL7DR0WJIiiTHdMOJehHzzoBCZqqEBnrwD1jHeP5y4TZ6Od8Ysqj0B9z2JwI83-tW0omu0SnSDGLcaHIXXPo');

        // alert('Ответ сервера: '+req.responseText);
      }
      // тут можно добавить else с обработкой ошибок запроса
    }

  };
  const URL = document.getElementById('table-URL').value;
  // (3) задать адрес подключения
  req.open('GET', '/ajax/' + URL, true);  

  // объект запроса подготовлен: указан адрес и создана функция onreadystatechange
  // для обработки ответа сервера
	 
  // (4)
  req.send(null);  // отослать запрос
  
  // (5)


}