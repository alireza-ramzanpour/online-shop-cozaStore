import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loggedUser } from "../../store/slices/UsersSlice";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import { products } from "../../store/slices/ProductsSlice";

function Dashboard() {
    const allProducts = useSelector(products)
    const loginUser = useSelector(loggedUser);

    const [allCategories, setAllCategories] = useState()
    const [userData, setUserData] = useState({
        labels: [],
        datasets: [{
            label: "User Cart Information",
            data: [],
            borderColor: "black",
            borderWidth: 2,
        }]
    });

    const [categoriesData, setCategoriesData] = useState({
        labels: allCategories,
        datasets: [{
            label: "%",
            data: [5, 3, 6],
            backgroundColor: [
                "rgba(75, 192, 192, 1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2,
        }]
    })

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        };
        return date.toLocaleString("en-US", options);
    }

    useEffect(() => {
        const uniqueDates = new Set(loginUser.history.map(item => item.date));
        const purchaseCountByDate = {};
        loginUser.history.forEach((item) => {
            if (purchaseCountByDate[item.date]) {
                purchaseCountByDate[item.date] += item.count;
            } else {
                purchaseCountByDate[item.date] = item.count;
            }
        });

        const labels = Object.keys(purchaseCountByDate).map((l) => l);
        console.log("labels: ", labels)
        const lbls = labels.map(date => formatDate(date));
        console.log("lbls", lbls);
        const data = labels.map(date => purchaseCountByDate[date]);

        setUserData({
            labels : lbls,
            datasets: [{
                label: "User Cart Information",
                data,
            }]
        });
    }, [loginUser.history]);

    useEffect(() => {
        let allCats = [];
        allProducts.forEach((product) => {
            allCats.push(...product.categories);
        });
        const uniqueCategories = Array.from(new Set(allCats));

        const categoriesCount = uniqueCategories.map((category) => {
            return {
                name: category,
                count: allProducts.filter((product) => product.categories.includes(category)).length
            };
        });

        const chartLabels = categoriesCount.map((cat) => cat.name);
        const chartData = categoriesCount.map((cat) => cat.count);

        const categoryPercent = categoriesCount.map((category) => {
            let sumCount = chartData.reduce((s, num) => s + num)
            return (category.count / sumCount) * 100
        })

        setCategoriesData({
            labels: chartLabels,
            datasets: [{
                label: "%",
                data: categoryPercent,
                backgroundColor: [
                    "rgba(75, 192, 192, 1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2,
            }]
        });
    }, [allProducts]);

    return (
        <>
            <div className='dash-wrapper'>
                <div className='dashBox-wrapper'>
                    <div className='dash-col'>
                        <h1>Last purchase date</h1>
                        <h1>{loginUser.history.length > 0 ? formatDate(loginUser.history[loginUser.history.length - 1].date) : "-"}</h1>
                    </div>
                    <div className='dash-col'>
                        <h1>Total shopping baskets</h1>
                        <h1>{loginUser.history.length}</h1>
                    </div>
                    <div className='dash-col'>
                        <h1>Total purchase amount</h1>
                        <h1>{loginUser.history.reduce((total, item) => total + (item.price * item.count), 0)}</h1>
                    </div>
                </div>
                <div className="lineChart-wrapper">
                    <div className="lineChart" >
                        <LineChart chartData={userData} />
                    </div>
                    <div className="lineChart" >
                        <PieChart chartData={categoriesData} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;