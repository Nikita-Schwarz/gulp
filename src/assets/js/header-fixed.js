document.addEventListener('DOMContentLoaded', function () {
        const headerBlack = () => {
            const header = document.getElementById('header');

            if (window.scrollY === 0) {
                header.classList.remove('header-black');
            } else {
                header.classList.add('header-black')
            }}

            window.addEventListener('scroll', () => {
                headerBlack();
            }
        )
    }
)
