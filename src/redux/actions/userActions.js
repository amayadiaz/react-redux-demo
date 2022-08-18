export const changeUserName = (name) => {
  return {
    type: "CHANGEUSERNAME",
    payload: name,
  }
}

export const changeUserEmail = (email) => {
  console.log(email);
  return {
    type: "CHANGEUSEREMAIL",
    payload: email,
  }
}

export const changeAvatar = (avatar) => {
  return {
    type: "CHANGEAVATAR",
    payload: avatar,
  }
}
