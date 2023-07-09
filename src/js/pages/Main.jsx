import React, {useEffect} from 'react';
import dzh from '../../assets/dzh.jpg';
import whatsapp from '../../assets/whatsapp_logo.png';
import about_us_illustration from '../../assets/about_us_illustration.jpeg';

const Main = () => {
    useEffect(() => {
        const hideContactsOnMobile = () => {
          const headerNavContacts = document.querySelector('.header__nav__contacts');
          if (headerNavContacts && window.innerWidth < 768) {
            headerNavContacts.classList.add('hide-header__nav__contacts');
          }
        };
    
        hideContactsOnMobile();
    
        window.addEventListener('resize', hideContactsOnMobile);
            return () => {
          window.removeEventListener('resize', hideContactsOnMobile);
        };
      }, []);

    return (
        <>
            <header className='header'>
                <nav className='header__nav__sticky'>
                    <div className='header__nav__contacts'>
                        <div className='container'>
                            <div className='nav__contacts'>
                                <a href="#" className='nav__contacts__item'>
                                    <i className='fa fa-phone'></i>
                                    +996 (553) 509-307
                                </a>
                                <a href="#" className='nav__contacts__item'>
                                    <i className='fa fa-phone'></i>
                                    +996 (777) 666-775
                                </a>
                                <a href="mailto:nurseitbakytbekov@gmail.com" class="nav__contacts__item">
                                    <i class="fa fa-envelope-o"></i>
                                    ravshan@dzh.kg
                                </a>
                                <a href="https://www.instagram.com/ravshandzh/">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="22" height="22" rx="11" fill="white"></rect>
                                        <path d="M11 6.49398C12.4578 6.49398 12.6566 6.49398 13.253 6.49398C13.7831 6.49398 14.0482 6.62651 14.247 6.69277C14.512 6.8253 14.7108 6.89157 14.9096 7.09036C15.1084 7.28916 15.241 7.48795 15.3072 7.75301C15.3735 7.95181 15.4398 8.21687 15.506 8.74699C15.506 9.34337 15.506 9.4759 15.506 11C15.506 12.5241 15.506 12.6566 15.506 13.253C15.506 13.7831 15.3735 14.0482 15.3072 14.247C15.1747 14.512 15.1084 14.7108 14.9096 14.9096C14.7108 15.1084 14.512 15.241 14.247 15.3072C14.0482 15.3735 13.7831 15.4398 13.253 15.506C12.6566 15.506 12.5241 15.506 11 15.506C9.4759 15.506 9.34337 15.506 8.74699 15.506C8.21687 15.506 7.95181 15.3735 7.75301 15.3072C7.48795 15.1747 7.28916 15.1084 7.09036 14.9096C6.89157 14.7108 6.75904 14.512 6.69277 14.247C6.62651 14.0482 6.56024 13.7831 6.49398 13.253C6.49398 12.6566 6.49398 12.5241 6.49398 11C6.49398 9.4759 6.49398 9.34337 6.49398 8.74699C6.49398 8.21687 6.62651 7.95181 6.69277 7.75301C6.8253 7.48795 6.89157 7.28916 7.09036 7.09036C7.28916 6.89157 7.48795 6.75904 7.75301 6.69277C7.95181 6.62651 8.21687 6.56024 8.74699 6.49398C9.34337 6.49398 9.54217 6.49398 11 6.49398ZM11 5.5C9.4759 5.5 9.34337 5.5 8.74699 5.5C8.1506 5.5 7.75301 5.63253 7.42169 5.76506C7.09036 5.89759 6.75904 6.09639 6.42771 6.42771C6.09639 6.75904 5.96386 7.0241 5.76506 7.42169C5.63253 7.75301 5.56627 8.1506 5.5 8.74699C5.5 9.34337 5.5 9.54217 5.5 11C5.5 12.5241 5.5 12.6566 5.5 13.253C5.5 13.8494 5.63253 14.247 5.76506 14.5783C5.89759 14.9096 6.09639 15.241 6.42771 15.5723C6.75904 15.9036 7.0241 16.0361 7.42169 16.2349C7.75301 16.3675 8.1506 16.4337 8.74699 16.5C9.34337 16.5 9.54217 16.5 11 16.5C12.4578 16.5 12.6566 16.5 13.253 16.5C13.8494 16.5 14.247 16.3675 14.5783 16.2349C14.9096 16.1024 15.241 15.9036 15.5723 15.5723C15.9036 15.241 16.0361 14.9759 16.2349 14.5783C16.3675 14.247 16.4337 13.8494 16.5 13.253C16.5 12.6566 16.5 12.4578 16.5 11C16.5 9.54217 16.5 9.34337 16.5 8.74699C16.5 8.1506 16.3675 7.75301 16.2349 7.42169C16.1024 7.09036 15.9036 6.75904 15.5723 6.42771C15.241 6.09639 14.9759 5.96386 14.5783 5.76506C14.247 5.63253 13.8494 5.56627 13.253 5.5C12.6566 5.5 12.5241 5.5 11 5.5Z" fill="#3C3B5C"></path>
                                        <path d="M11 8.1506C9.40964 8.1506 8.1506 9.40964 8.1506 11C8.1506 12.5904 9.40964 13.8494 11 13.8494C12.5904 13.8494 13.8494 12.5904 13.8494 11C13.8494 9.40964 12.5904 8.1506 11 8.1506ZM11 12.8554C10.006 12.8554 9.14458 12.0602 9.14458 11C9.14458 10.006 9.93976 9.14458 11 9.14458C11.994 9.14458 12.8554 9.93976 12.8554 11C12.8554 11.994 11.994 12.8554 11 12.8554Z" fill="#3C3B5C"></path>
                                        <path d="M13.9157 8.74699C14.2816 8.74699 14.5783 8.45031 14.5783 8.08434C14.5783 7.71837 14.2816 7.42169 13.9157 7.42169C13.5497 7.42169 13.253 7.71837 13.253 8.08434C13.253 8.45031 13.5497 8.74699 13.9157 8.74699Z" fill="#3C3B5C"></path>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="22" height="22" rx="11" fill="white"></rect>
                                        <path d="M11.9114 11.2007H13.9586L14.28 9.10833H11.911V7.96476C11.911 7.09557 12.1933 6.32481 13.0014 6.32481H14.3V4.49888C14.0719 4.46788 13.5893 4.40002 12.6775 4.40002C10.7735 4.40002 9.65728 5.41164 9.65728 7.71636V9.10833H7.70001V11.2007H9.65728V16.9516C10.0449 17.0102 10.4375 17.05 10.8405 17.05C11.2049 17.05 11.5604 17.0165 11.9114 16.9688V11.2007Z" fill="#3C3B5C"></path>
                                    </svg>
                                </a>
                                <a href="https://wa.me/996553509307">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="22" height="22" rx="11" fill="white"></rect>
                                        <path d="M15.3598 6.63439C14.2732 5.55157 12.8244 4.95001 11.2951 4.95001C8.11585 4.95001 5.54024 7.51668 5.54024 10.6849C5.54024 11.6875 5.82195 12.6901 6.30488 13.5323L5.5 16.5L8.55854 15.6979C9.40366 16.1391 10.3293 16.3797 11.2951 16.3797C14.4744 16.3797 17.05 13.813 17.05 10.6448C17.0098 9.16095 16.4463 7.7172 15.3598 6.63439ZM14.072 12.7302C13.9512 13.0511 13.3878 13.3719 13.1061 13.412C12.8646 13.4521 12.5427 13.4521 12.2207 13.3719C12.0195 13.2917 11.7378 13.2115 11.4159 13.0511C9.96707 12.4495 9.04146 11.0057 8.96098 10.8854C8.88049 10.8052 8.35732 10.1234 8.35732 9.40157C8.35732 8.6797 8.71951 8.35887 8.84024 8.19845C8.96098 8.03803 9.12195 8.03803 9.24268 8.03803C9.32317 8.03803 9.4439 8.03803 9.52439 8.03803C9.60488 8.03803 9.72561 7.99793 9.84634 8.27866C9.96707 8.55939 10.2488 9.28126 10.289 9.32137C10.3293 9.40157 10.3293 9.48178 10.289 9.56199C10.2488 9.6422 10.2085 9.72241 10.128 9.80262C10.0476 9.88282 9.96707 10.0031 9.92683 10.0432C9.84634 10.1234 9.76585 10.2037 9.84634 10.324C9.92683 10.4844 10.2085 10.9255 10.6512 11.3266C11.2146 11.8078 11.6573 11.9682 11.8183 12.0485C11.9793 12.1287 12.0598 12.0886 12.1402 12.0083C12.2207 11.9281 12.5024 11.6073 12.5829 11.4469C12.6634 11.2865 12.7841 11.3266 12.9049 11.3667C13.0256 11.4068 13.75 11.7677 13.8707 11.8479C14.0317 11.9281 14.1122 11.9682 14.1524 12.0083C14.1927 12.1287 14.1927 12.4094 14.072 12.7302Z" fill="#3C3B5C"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='header__nav__menu'>
                        <div className='container'>
                            <div className='nav__menu'>
                                <div className='nav__menu__logo__container'>
                                    <img src={dzh} alt="Dzh logo" className='nav__menu__logo'/>
                                </div>
                                <div className='nav__menu__links'>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span>
                                                Главная
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>
                                                О нас
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>
                                                Партнеры
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className='active'>
                                                Продукция
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className='pulsate'>
                                                Свяжитесь с нами
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='main'>
                <section className='slider'>

                </section>
                <section className='about'>
                    <img src={about_us_illustration} alt="#" className='about__img'/>
                    <div className='about__text'>
                        <h3 className='about__text__title'>О нас</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </section>
            </main>
            <div className='fixed_button'>
                <a href="https://wa.me/996553509307">
                    <img src={whatsapp} alt="#"/>
                </a>
            </div>
        </>
    )
}

export default Main;
