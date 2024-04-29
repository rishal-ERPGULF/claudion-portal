
import instance from "./Axios";


export const generateToken = async (): Promise<any> => {
  try {
    const { data } = await instance.post(
      "gauth.gauth.gauth.generate_token_secure",
      new URLSearchParams({
        api_key: import.meta.env.VITE_Api_Key,
        api_secret: import.meta.env.VITE_Secret_key,
        app_key: btoa(import.meta.env.VITE_App_key),
        client_secret: import.meta.env.VITE_Client_Secret,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("Generated token", data);
    return data;
  } catch (error) {
    console.error(`Error generating token: ${error}`);
    return Promise.reject(error);
  }
};

export const refreshToken = async (): Promise<any> => {
  try {
    const refresh_token = localStorage.getItem("refresh_token");

    const formData = new FormData();
    formData.append("grant_type", "refresh_token");
    formData.append("refresh_token", refresh_token || "");

    const response = await instance.post(
      "frappe.integrations.oauth2.get_token",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    localStorage.setItem("access_token", response.data.access_token);

    return response;
  } catch (refreshError) {
    console.error("Error refreshing token:", refreshError);
    return Promise.reject(refreshError);
  }
};

export const tokenGenerated = async (): Promise<any> => {
  try {
    const generateTokenResponse = await generateToken();
    localStorage.setItem("refresh_token", generateTokenResponse.data.refresh_token);
    localStorage.setItem("access_token", generateTokenResponse.data.access_token);
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      const refreshTokenResponse = await refreshToken();
      return Promise.resolve(refreshTokenResponse);
    }

    return Promise.resolve({ access_token: accessToken });
  } catch (error) {
    console.error(`Error generating or refreshing token: ${error}`);
    return Promise.reject(error);
  }
};

export const userToken = async (email: string, password: string): Promise<any> => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await instance.post(
      "claudion_io.public.subscription.generate_token_secure_for_users",
      new URLSearchParams({
        app_key: btoa(import.meta.env.VITE_App_key),
        client_secret: import.meta.env.VITE_Client_Secret,
        username: email,
        password: password,
      }).toString(),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("userdata", response);
    localStorage.setItem("access_token", response.data.data.token.access_token);
    localStorage.setItem('UserData', response.data.data.token.access_token);
    if (!response) {
      
      return null;
    } else {
      return response;
    }
  } catch (error) {
    console.error(`Error generating token: ${error}`);
    return Promise.reject(error);
  }
};

export const createUser = async (name: string, email: string, phone: string, password: string, id: string): Promise<any> => {
  try {
    const accessToken = localStorage.getItem("access_token");
    const newUser = await instance.post(
      'claudion_io.public.subscription.g_create_user',
      {
        full_name: name,
        password: password,
        mobile_no: phone,
        email: email,
        qid: id,
        role: 'Accounts User',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Cookie: 'full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log('New user created:', newUser);
    return Promise.resolve(newUser);

  } catch (error) {
    return Promise.reject(error);
  }
};

export const getFeedback = async (): Promise<any> => {
  try {
    const response = await instance.post(
      'claudion_io.public.subscription.feedback',
      {
        description: ' I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Data Grid are so worth it. Every other library  Im looking for when it comes to complex use cases, Material UI has it all under one roof .',
        name: 'Hiba',
      },
      {
        headers: {
          Cookie: 'full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=;',
        },
      }
    );

    console.log('feedkback:', response);
    return response;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getItems = async (): Promise<any> => {
  try {
    const response = await instance.post(
      'claudion_io.public.subscription.get_items',
      {},
      {
        headers: {
          Cookie: 'full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=;',
        },
      }
    );

    console.log('items:', response);
    return response;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getStatement = async (): Promise<any> => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await instance.get(
      'claudion_io.public.subscription.statement',
      {
        params: {
          offset: '0',
          limit: '2',
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie: 'full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=;',
        },
      }
    );

    console.log('items:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getCoupen = async (coupon: string): Promise<any> => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await instance.post(
      'claudion_io.public.subscription.Coupon_Code',
      {
        coupon_name: coupon,
        coupon_type: 'Promotional',
        discount_percentage: '6',
        pricing_rule: 'PRLE-0002',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Cookie: 'full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=;',
        },
      }
    );

    console.log('Coupen:', response);
    if (!response) {
      
      return null;
    } else {
      return response;
    }

  } catch (error) {
   
    console.error('Error:', error);
    throw error;
  }
};


export const getSubscription_or_invoice =  async (amount: number): Promise<any> => {
  try {
    const response = await instance.post(
      'claudion_io.public.subscription.create_subscription_or_invoice',
      {
        party_type: "Customer",
    party: "Aysha sithara",
    company: "Claudion",
    start_date: "2024-02-14",
    end_date: "2024-03-14",
    generate_invoice_at: "End of the current subscription period",
    number_of_days: 2,
    is_invoice: true,
    customer_id: "Aysha sithara",
    items: [
      { item_code: "wifi", quantity: 1, rate: amount }
    ],
    trial_period_end: "2024-01-24",
    trial_period_start: "2024-01-14",
    plan: [
      { plan: "wifi plan", quantity: 5 },
      { plan: "youtube", quantity: 1 }
    ]
  },
      
      {
        headers: {
          
          Cookie: 'full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=; full_name=Guest; sid=Guest; system_user=yes; user_id=Guest; user_image=;',
        },
      }
    );

    console.log('Subscription or inovice:', response);
    if (!response) {
      
      return null;
    } else {
      return response;
    }

  } catch (error) {
   
    console.error('Error:', error);
    throw error;
  }
};
