window.onload = function createBoard() {

    const loadData = (id) => {
        localStorage.getItem(id) ?
         document.getElementById(id).value = localStorage.getItem(id) :
         false;
    }

    const saveData = (id) => {
        localStorage.setItem(id, document.getElementById(id).value);
    }

    const container = document.getElementById("container");
    const titles = ["Date", "Title", "Author", "Gênero", "Feedback"];
    const range = (start, end) => {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }

    const createLabel = (element) => {
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = element;
        container.appendChild(label);
    }


    titles.forEach(createLabel);
    range(1, 99).forEach(number => {
        createLabel(number);
        titles.forEach(title => {
            const input = document.createElement("input");
            if (title === "Date") {
                input.type = "date"
            } else if (title === "Feedback") {
                input.type = "number";
                input.min = 0;
                input.max = 5;
            } else {
                input.type = "text";
            }
            input.id = title + number;
            input.className = "data";
            input.ariaLabel = title + number;
            input.onchange = () => {
                saveData(input.id);
            }
            container.appendChild(input);
            loadData(input.id)
        })
    })

}