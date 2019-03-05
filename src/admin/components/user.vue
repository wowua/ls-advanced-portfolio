<template lang="pug">
  .user
    .user__avatar
      img(src="~images/content/user.jpg").user__avatar-pic 
    .user__desc
      .user__name Владимир Сабанцев
      .user__occ Преподаватель
</template>

<style lang="postcss" scoped>
.user {
  display: flex;
}

.user__avatar {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
  flex-shrink: 0;
}

.user__name {
  font-weight: 600;
  font-size: 18px;
}

.user__occ {
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
  opacity: .5;
}
</style>

