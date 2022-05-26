(() => {
    document.addEventListener('DOMContentLoaded', () => {


        function craeteContentPage(obj) {
            const div = document.querySelector('.pageContent');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');

            h1.className = 'h1';
            p.className = 'descr';
            h1.textContent = obj.title;
            p.textContent = obj.body;

            div.append(h1)
            div.append(p)
        }

        function createComments(obj) {
            const ul = document.querySelector('.comments-list')
            const li = document.createElement('li');
            const user = document.createElement('h2');
            const massage = document.createElement('p');

            li.className = 'comments-item';
            user.className = 'user';
            massage.className = 'massage';

            user.textContent = obj.name;
            massage.textContent = obj.body;


            li.append(user)
            li.append(massage)
            ul.append(li);
        }

        async function getCommentsData(id) {
            const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${id}`);
            const data = await response.json();
            

            for (let i = 0; i < data.data.length; i++) {
                createComments(data.data[i])
            }

        }

        async function getPageData(id) {
            const response = await fetch(`https://gorest.co.in/public/v1/posts/${id}`);
            const data = await response.json();
            craeteContentPage(data.data);
        }
       
        function getID() {
            const paramPage = window.location.search;
            const id = new URLSearchParams(paramPage);
            return id.get('id');
        }


        getPageData(getID())

        getCommentsData(getID())


    })
})()