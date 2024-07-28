// 搜尋欄位
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const houseList = document.querySelectorAll('#house-list li');

    function searchHouses() {
        const searchTerm = searchInput.value.toLowerCase();

        houseList.forEach(house => {
            const region = house.getAttribute('data-region').toLowerCase();
            const city = house.getAttribute('data-city').toLowerCase();
            const title = house.querySelector('h2').textContent.toLowerCase();
            const locaBtnParagraphs = house.querySelectorAll('.locaBtn p');
            let content = '';

            locaBtnParagraphs.forEach(p => {
                content += p.textContent.toLowerCase() + ' ';
            });

            if (region.includes(searchTerm) || city.includes(searchTerm) || title.includes(searchTerm) || content.includes(searchTerm)) {
                house.style.display = 'list-item';
            } else {
                house.style.display = 'none';
            }
        });
    }

    function resetHouses() {
        houseList.forEach(house => {
            house.style.display = 'list-item';
        });
    }

    // 點擊搜尋按鈕觸發搜尋
    searchButton.addEventListener('click', searchHouses);

    // 按下ENTER鍵觸發搜尋
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchHouses();
        }
    });

    // 當搜尋欄位內容改變且為空時重置顯示
    searchInput.addEventListener('input', function () {
        if (searchInput.value.trim() === '') {
            resetHouses();
        }
    });
});



// 篩選部分
document.addEventListener('DOMContentLoaded', function () {
    // 在整個document(html)完全讀取和解析後就會被觸發，不需等待網頁資源讀取完成。
    const areaOptions = document.querySelectorAll('#area-options .sub-item');
    const cityOptions = document.querySelectorAll('#city-options .sub-item');
    const houseList = document.querySelectorAll('.house li');

    let selectedRegion = null;
    let selectedCity = null;

    function updateCityOptions(region) {
        cityOptions.forEach(option => {
            //
            if (option.getAttribute('data-region') === region || region === null) {
                option.style.display = 'list-item';
            } else {
                option.style.display = 'none';
            }
        });
    }

    function updateHouseList() {
        houseList.forEach(house => {
            const matchesRegion = !selectedRegion || house.getAttribute('data-region') === selectedRegion;
            const matchesCity = !selectedCity || house.getAttribute('data-city') === selectedCity;

            if (matchesRegion && matchesCity) {
                house.style.display = 'list-item';
                console.log('if')
            } else {
                house.style.display = 'none';
                console.log('else')
            }

        });

    }

    function clearSelected(options) {
        options.forEach(option => {
            option.classList.remove('selected');
        });
    }

    function handleOptionClick(event, options, isRegion = false) {
        const clickedOption = event.currentTarget;
        const currentSelection = clickedOption.classList.contains('selected');

        clearSelected(options);

        if (isRegion) {
            if (!currentSelection) {
                clickedOption.classList.add('selected');
                selectedRegion = clickedOption.getAttribute('data-region');
                selectedCity = null; // Reset the selected city
                updateCityOptions(selectedRegion);
            } else {
                selectedRegion = null; // Deselect region
                selectedCity = null; // Deselect city
                updateCityOptions(null);
            }
        } else {
            if (currentSelection) {
                selectedCity = null; // Deselect city
            } else {
                clickedOption.classList.add('selected');
                selectedCity = clickedOption.getAttribute('data-city');
            }
        }

        updateHouseList();
    }

    areaOptions.forEach(option => {
        option.addEventListener('click', function (event) {
            handleOptionClick(event, areaOptions, true);
        });
    });

    cityOptions.forEach(option => {
        option.addEventListener('click', function (event) {
            handleOptionClick(event, cityOptions);
        });
    });

    // Initialize city options display
    updateCityOptions(null);
    updateHouseList();
});



