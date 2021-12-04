import cryptoSite from './assets/crypto-site.jpg';
import parser from './assets/parser.jpg'
import bots from './assets/schedule-bots.jpg'
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const projectSectionData = {
    title: 'Мои проекты',
    projectCards: [
        {
            title: 'Комплекс получения расписания УлГТУ',
            date: '2021',
            tag: 'Чат-боты',
            description: 'Чат-боты, отправляющие расписание занятий УлГТУ и КЭИ им. А.Н. Афанасьева и интегрированные во' +
                ' «ВКонтакте» и Telegram.',
            image: cryptoSite,
            imageLabel: 'Диалог с чат-ботом',
            url: "#",
        },
        {
            title: 'Криптовалюты в современной экономике',
            date: '2021',
            tag: 'Веб-сайты',
            description: 'Веб-сайт, олицетворяющий собой краткий экскурс в криптомир, содержащий в себе ответы на ' +
                'популярные ответы и, конечно, конвертер криптовалют!',
            image: parser,
            imageLabel: 'Веб-сайт "Криптовалюты в современной экономике"',
            url: "#",
        },
        {
            title: 'Сравнение научных библиотек',
            date: '2020',
            tag: 'Парсеры',
            description:
                'Программа, выполняющая выборку данных и\n' +
                'статистическую обработку из электронных библиотек\n' +
                'eLIBRARY.ru и Академии Google.',
            image: bots,
            imageLabel: 'Код парсера',
            url: "#",
        },
    ],
}

export const footerData = {
    social: [
        {icon: GitHubIcon, url: 'https://github.com/tmrrwnxtsn'},
        {icon: TelegramIcon, url: 'https://t.me/tmrrwnxtsn'},
        {icon: FacebookIcon, url: 'https://www.facebook.com/100072945049284'},
        {icon: InstagramIcon, url: 'https://www.instagram.com/tmrrwnxtsn/'},
    ],
    owner: 'Курмыза Павел',
    siteUrl: 'https://tmrrwnxtsn.github.io/portfolio-website',
}