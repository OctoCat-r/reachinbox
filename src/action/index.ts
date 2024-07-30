// import axios from "axios";

let token = localStorage.getItem("reachinbox-auth");
token = token ? JSON.parse(token) : "";

export const getMailList = async () => {
  try {
    const response = await fetch(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMailMasseges = async (id: number) => {
  try {
    const response = await fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const postMailMasseges = async (id: number, messages: any) => {
  try {
    const response = await fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages),
      }
    );
    const data = await response.json();
    console.log("Posted:", data);
    return data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export const deleteMailResponse = async (id: number) => {
  try {
    const response = await fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const resetMail = async (token: string | null) => {
  try {
    const response = await fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reset`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
