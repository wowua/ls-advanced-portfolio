<template lang="pug">
  .header
    .container
      .header__info
        .user
          .user__pic
            img(src="../../images/content/user.jpg").user__pic-avatar
          .user__name Владимир Астаханов
        .header__title Панель администрирования
      a.exit-btn Выйти
</template>

<style lang="postcss" scoped>
.header {
  color: #fff;
}

.header__info {
  display: flex;
  align-items: center;
}

.header__title {
  color: rgba(#fff, .5);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.user__name {
  font-size: 18px;
  font-weight: 600;
}

.user__pic {
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}
</style>

