export const getMailList = async (token: string) => {
  try {
    const response = await fetch(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMailMessages = async (id: number, token: string) => {
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

export const postMailMessages = async (
  id: number,
  messages: any,
  token: string
) => {
  try {
    console.log(messages);
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

export const deleteMailResponse = async (id: number, token: string) => {
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
