import News1 from "../assets/News1.jpg";
import News2 from "../assets/News2.png";

export const api = {
  // ---------- ЛОКАЛЬНАЯ БАЗА ПОЛЬЗОВАТЕЛЕЙ ----------
  getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
  },

  saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  },

  // ---------- РЕГИСТРАЦИЯ ----------
  registerUser(userData) {
    const users = this.getUsers();

    const exists = users.some((u) => u.username === userData.username);
    if (exists) {
      return { success: false, message: "Логин уже существует" };
    }

    const newUser = { ...userData, savedNews: [] };
    users.push(newUser);
    this.saveUsers(users);

    return { success: true, user: newUser };
  },

  // ---------- ВХОД ----------
  login(username, password) {
    const users = this.getUsers();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return { success: false, message: "Неверный логин или пароль" };
    }

    return { success: true, user };
  },

  // ---------- НОВОСТИ ----------
  async getNews() {
    return [
      {
        id: 1,
        title: "Ала-Тоо провёл ежегодную научно-практическую конференцию студентов и молодых исследователей",
        description: "Участники представили более 40 проектов в сфере IT, инженерии, медиакоммуникаций и социальных наук",
        fullText: "Ала-Тоо Международный университет провёл ежегодную научно-практическую конференцию студентов и молодых исследователей. В этом году участники представили более 40 проектов в различных сферах, включая IT, инженерные науки, медиакоммуникации и социальные науки. Конференция стала платформой для обмена знаниями и опытом между студентами, преподавателями и профессионалами отрасли. Победители получили ценные призы и возможность реализовать свои проекты при поддержке университета.",
        image: News1,
        author: "Admin",
        date: "09.12.2025",
        category: "Образование",
      },
      {
        id: 2,
        title: "Университет Ала-Тоо приглашает на новогодний фестиваль “Winter Lights 2025”",
        description: "Праздничная программа, концерт, ярмарка клубов и благотворительная акция пройдут в кампусе 25 декабря",
        fullText: "Университет Ала-Тоо приглашает всех студентов, сотрудников и гостей на новогодний фестиваль “Winter Lights 2025”, который состоится 25 декабря в кампусе университета. В программе мероприятия запланированы праздничные концерты с участием студенческих коллективов, ярмарка клубов и организаций, а также благотворительная акция по сбору подарков для детей из малообеспеченных семей. Фестиваль обещает создать волшебную атмосферу праздника и подарить незабываемые впечатления всем участникам.",
        image: News2,
        author: "Editor",
        date: "11.12.2025",
        category: "События",
      }
    ];
  },

  // ---------- БЮРО НАХОДОК ----------
  async getLostItems() {
    return [
      {
        id: 1,
        name: "Ключи",
        description: " Связка ключей с красным брелком. Найдено в столовой. Контакты: 0703978675",
        image: "https://i.etsystatic.com/15607037/r/il/af1e3b/2966323843/il_570xN.2966323843_4kkx.jpg",
        date: "10.12.2025",
      },
      {
        id: 2,
        name: "Зонт",
        description: "Желтый зонт, найден на остановке. Контакты: 0550436271",
        image: "https://cdn.shopify.com/s/files/1/0314/0462/1883/products/willow-tree-classic-auto-open-yellow-umbrella-orange-amber-948.jpg?v=1608170563",
        date: "09.12.2025",
      }
    ];
  }
};
