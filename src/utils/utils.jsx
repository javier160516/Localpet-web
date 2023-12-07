const getConfig = () => {
    const token = localStorage.getItem('localtoken');
    if (!token) {
        setLoading(false);
        return;
    }
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    return config;
}

export { getConfig };