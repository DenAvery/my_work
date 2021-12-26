(function () {
  document.addEventListener('DOMContentLoaded', function () {



    function convertFormData(dataString) {
      return dataString
        .split("''")
        .map(line => {
          const [surname, name, middleName, birthday, yearStudy, faculty] = line
            .split(',')
            .map(line => line.trim())
          return {
            surname,
            name,
            middleName,
            birthday,
            yearStudy,
            faculty
          }
        });
    }

    function validation() {

      const date = new Date();
      const ErrorMessage = document.querySelector('.error-message');
      const year = date.getFullYear();
      ErrorMessage.classList.remove('active');
      let isError = false;

      inputsData.forEach(el => {
        if (el.value.trim() == '') {
          el.classList.add('border-danger');
          ErrorMessage.innerHTML = 'Не все обязательные поля заполнены';
          ErrorMessage.classList.add('active');
          isError = true;
        }
        else {
          el.classList.remove('border-danger');
        }

        if (el.type === 'number') {
          if (el.value < 2000 || el.value > year) {
            el.classList.add('border-danger');
            ErrorMessage.innerHTML = 'Неправильный год обучения';
            ErrorMessage.classList.add('active');
            isError = true;
          }
        }

        if (el.type === 'date') {
          const birthday = new Date(el.value);
          const startRange = new Date('01.01.1900');
          if (birthday < startRange || birthday > date) {
            el.classList.add('border-danger');
            ErrorMessage.innerHTML = 'Неправильная дата рождения';
            ErrorMessage.classList.add('active');
            isError = true;
          }
        }
      });
      return isError;
    }

    function formatDate(date) {

      let dd = date.getDate();
      if (dd < 10) dd = '0' + dd;

      let mm = date.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;

      let yy = date.getFullYear();
      if (yy < 10) yy = '0' + yy;

      return dd + '.' + mm + '.' + yy;
    }

    function createStudentsList(array) {

      function createStudentItem(obj) {

        function getCorrectData(data) {
          const startOfYear = Number(data);
          const endOfYear = startOfYear + 4;
          const result = now.getFullYear() - startOfYear;
          let fullData = `${startOfYear}-${endOfYear} (${result} курс)`
          if (result > 4) {
            fullData = 'Закончил'
          }
          if (result === 4 && now.getMonth() > 8) {
            fullData = 'Закончил'
          }
          return fullData;
        }

        const tbody = document.querySelector('tbody');
        const tr = document.createElement('tr');
        tr.className = 'line';
        const fullName = document.createElement('td');
        const faculty = document.createElement('td');
        const birthday = document.createElement('td');
        const yearsStudy = document.createElement('td');
        const now = new Date();
        fullName.innerHTML = `${obj.surname} ${obj.name} ${obj.middleName}`;
        faculty.innerHTML = obj.faculty;
        birthday.innerHTML = `${formatDate(new Date(obj.birthday))} (${now.getFullYear() - new Date(obj.birthday).getFullYear()} лет)`;
        yearsStudy.innerHTML = getCorrectData(obj.yearStudy);
        tbody.append(tr);
        tr.append(fullName);
        tr.append(faculty);
        tr.append(birthday);
        tr.append(yearsStudy);
      }

      const currentTr = document.querySelectorAll('.line');
      currentTr.forEach(el => el.remove());
      array.forEach(el => createStudentItem(el));
    }

    function sortedRows(arr, input) {
      const copyArray = arr.slice();
      switch (input.id) {
        case 'title--fullname':
        copyArray.sort((rowA, rowB) => rowA.surname.toLowerCase() > rowB.surname.toLowerCase() ? 1: -1);
        break;
        case 'title--faculty':
        copyArray.sort((rowA, rowB) => rowA.faculty.toLowerCase() > rowB.faculty.toLowerCase() ? 1: -1);
        break;
        case 'title--birthday':
        copyArray.sort((rowA, rowB) => rowA.birthday > rowB.birthday ? 1: -1);
        break;
        case 'title--yearsStudy':
        copyArray.sort((rowA, rowB) => rowA.yearStudy < rowB.yearStudy ? 1: -1);
        break;
      }
      createStudentsList(copyArray);
    }


    const studentsArray = [
      { surname: 'Иванов', name: 'Иван', middleName: 'Иванович', birthday: '1989-09-13', yearStudy: '2018', faculty: "Юридический" },
      { surname: 'Сидоров', name: 'Кирилл', middleName: 'Альбертович', birthday: '1990-05-20', yearStudy: '2017', faculty: "Экономический" },
      { surname: 'Шаров', name: 'Максим', middleName: 'Сергеевич', birthday: '2000-01-21', yearStudy: '2019', faculty: "Гуманитарный" },
      { surname: 'Агафонов', name: 'Олег', middleName: 'Олегович', birthday: '1989-07-01', yearStudy: '2020', faculty: "Химический" },
      { surname: 'Турбин', name: 'Михаил', middleName: 'Николаевич', birthday: '1992-08-07', yearStudy: '2008', faculty: "Юридический" },
      { surname: 'Соколова', name: 'Ольга', middleName: 'Ивановна', birthday: '1986-09-17', yearStudy: '2020', faculty: "Экономический" },
    ];

    // Форма добавления нового студента

    const form = document.querySelector('.form');
    const inputsData = document.querySelectorAll('.input');
    const inputsSearch = document.querySelectorAll('.input-search');


    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let checkError = validation();

      if (!checkError) {
        const arr = [];
        inputsData.forEach(el => {
          arr.push(el.value);
          el.value = "";
        })

        const student = convertFormData(arr.toString());
        studentsArray.push(student[0]);
        createStudentsList(studentsArray);
      }
    });

    createStudentsList(studentsArray);



    // Сортировка




    document.querySelectorAll('.table__title').forEach(el => {
      el.addEventListener('click', function () {
        sortedRows(studentsArray, el);
      })
    })





    // Фильтр

    inputsSearch.forEach(el => {
      el.addEventListener('input', function () {
        let copyArray = studentsArray.slice();
        inputsSearch.forEach(el => {

          switch (el.id) {
            case 'search-fullname':
              copyArray = copyArray.filter(function (obj) {
                const fullname = `${obj.name} ${obj.surname} ${obj.middleName}`;
                return fullname.toLowerCase().indexOf(el.value.toLowerCase()) !== -1
              })
              break;
            case 'search-faculty':
              copyArray = copyArray.filter(obj => obj.faculty.toLowerCase().indexOf(el.value.toLowerCase()) !== -1);
              break;

            case 'search-startOfYear':
              copyArray = copyArray.filter(obj => obj.yearStudy.indexOf(el.value) !== -1);
              break;


            case 'search-endOfYear':
              copyArray = copyArray.filter(function (obj) {
                const endStudy = `${Number(obj.yearStudy) + 4}`;
                return endStudy.indexOf(el.value) !== -1
              })
              break;
          }
        })
        createStudentsList(copyArray)
      })
    })





  })
})()




















