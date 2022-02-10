(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const row = document.querySelector('.row');
        const paginationList = document.querySelector('.pagination'); 
        


        function createPost(obj) {
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const a = document.createElement('a');


            div.className = 'col-6 mb-3';
            h2.className = 'post__title';
            h2.textContent = obj.title;
            p.className = 'post__descr';
            p.textContent = obj.body;
            a.href = `post.html?id=${obj.id}`;
            a.className = 'post__link';
            a.textContent = 'Подробнее';


            div.append(h2)
            div.append(p)
            div.append(a)
            row.append(div)
        }


        async function getPostData(page) {
            const pageParams = new URLSearchParams(window.location.search);
            const pageNumber = (pageParams.get('page') === null) ? 1 : pageParams.get('page');
            const response = await fetch(`https://gorest.co.in/public/v1/posts?page=${pageNumber}`);
            const data = await response.json();
            let i = (page * data.meta.pagination.limit) - data.meta.pagination.limit;
            
            let postCounter = 0;

            for (i; i < data.data.length; i++) {
                if (postCounter === data.meta.pagination.limit) {
                    postCounter = 0;
                    return;
                }
                postCounter += 1;
                createPost(data.data[i])
            }
        }


        function pagination(currentPage, pageCount, delta = 3) {
            const separate = (a, b) => [a, ...({
                0: [],
                1: [b],
                2: [a + 1, b],
            }[b - a] || ['...', b])]

            return Array(delta * 2 + 1)
                .fill()
                .map((_, index) => currentPage - delta + index)
                .filter(page => 0 < page && page <= pageCount)
                .flatMap((page, index, { length }) => {
                    if (!index) return separate(1, page)
                    if (index === length - 1) return separate(page, pageCount)

                    return [page]
                })
        }
        

        function createPagination(arr) {
            for (page of arr) {
                const li = document.createElement('li');
                const link = document.createElement('a');
                li.className = 'page-item';
                link.className = 'page-link';
                link.textContent = page;
                link.href = `./index.html?page=${page}`;
                li.append(link);
                paginationList.append(li);
                link.addEventListener('click', function(e) {
                    
                    
                    document.querySelectorAll('.col-6').forEach(el => el.remove())
                    const num = Number(this.textContent);
                    
                    if (num) {
                        document.querySelectorAll('.page-item').forEach(el => el.remove())
                        getPostData(Number(this.textContent));
                    }
                    else {
                        return
                    }
                })
            }

            
        }


        async function getPaginationData() {
            const response = await fetch('https://gorest.co.in/public/v1/posts');
            const data = await response.json();
            const currentPage = new URLSearchParams(window.location.search).get('page'); 
            const pageList = pagination(Number(currentPage), data.meta.pagination.pages)
            createPagination(pageList);
        }

        // Вызовы

        getPaginationData()

        getPostData(1);



    })
})()