let students = [
    // { id: 1, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1000, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 2, ten: "Nguyễn Văn B",lop: "Fast1", mssv: 1001, email: "b@gmail.com", khoa: "Fast", gioitinh: "Nam", ngaysinh: "2003-06-14" },
    // { id: 3, ten: "Lê A",lop: "CNTT1", mssv: 1002, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 4, ten: "Nguyễn C",lop: "CNTT1", mssv: 1003, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 5, ten: "Phạm A",lop: "CNTT1", mssv: 1004, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 6, ten: "Trần Văn A",lop: "CNTT1", mssv: 1005, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 7, ten: "Hồ E",lop: "CNTT1", mssv: 1006, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 8, ten: "Lữ Văn A",lop: "CNTT1", mssv: 1007, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 9, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1008, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 10, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1009, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 11, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1010, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 12, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1011, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-06-03" },
    // { id: 13, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1012, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-13" },
    // { id: 14, ten: "Nguyễn Văn B",lop: "Fast1", mssv: 1013, email: "b@gmail.com", khoa: "Fast", gioitinh: "Nam", ngaysinh: "2003-06-14" },
    // { id: 15, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1014, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-12-03" },
    // { id: 16, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1015, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 17, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1016, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-05-03" },
    // { id: 18, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1017, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 19, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1018, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 20, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1019, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-07-03" },
    // { id: 21, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1020, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 22, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1021, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 23, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1022, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    // { id: 24, ten: "Nguyễn Văn A",lop: "CNTT1", mssv: 1023, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" }

];
let currentStudentId = null;
let nextStudentId = null;

const studentsPerPage = 10;
let currentPage = 1;
let currentClassList = students;
let totalPages = Math.ceil(students.length / studentsPerPage);

let studentIndexToDelete = null;// Student cần xóa

const lopOptions = {
    CNTT: ['CNTT1', 'CNTT2', 'CNTT3'],
    Fast: ['Fast1', 'Fast2', 'Fast3'],
    "Cơ khí": ['CK1', 'CK2', 'CK3'],
    "Cơ khí giao thông": ['CKGT1', 'CKGT2', 'CKGT3'],
    Hóa: ['Hoa1', 'Hoa2', 'Hoa3'],
    "Môi trường": ['MT1', 'MT2', 'MT3'],
    "Kiến trúc": ['KT1', 'KT2', 'KT3'],
    "Xây dựng": ['XD1', 'XD2', 'XD3']
};
renderStudents = () => {
    // students = [
    //     { id: 1, ten: "Nguyễn Văn A",lop: "21TDT3", mssv: 102234567, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
    //     { id: 2, ten: "Nguyễn Văn B",lop: "21TDT3", mssv: 102232512, email: "b@gmail.com", khoa: "Fast", gioitinh: "Nam", ngaysinh: "2003-06-14" }
    // ];
    students = loadFromSessionStorage();
    showStudents(students);
    displayStudents(currentPage);

    nextStudentId = determineNextStudentId();
    // students = [];
}
// Thêm sinh viên mới
document.getElementById('studentForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const id = nextStudentId++;
    const ten = document.getElementById('ten').value;
    const mssv = document.getElementById('mssv').value;
    const email = document.getElementById('email').value;
    const khoa = document.getElementById('khoa').value;
    const lop = document.getElementById('lop').value;
    const gioitinh = document.getElementById('gioitinh').value;
    const ngaysinh = document.getElementById('ngaysinh').value;

    students.push({id, ten, mssv, email, khoa, lop, gioitinh, ngaysinh });
    saveToSessionStorage(students);

    showStudents(students);
    displayStudents(currentPage);
    alert("Đã thêm sinh viên thành công!");
    // Xóa giá trị các ô input sau khi thêm
    document.getElementById('studentForm').reset();
    handleKhoaChange();
});

// Cập nhật sinh viên
submitUpdate = () => {
    const updatedName = document.getElementById('ten-upd').value;
    const updatedMssv = document.getElementById('mssv-upd').value;
    const updatedEmail = document.getElementById('email-upd').value;
    const updatedDepartment = document.getElementById('khoa-upd').value;
    const updatedClass = document.getElementById('lop-upd').value;
    const updatedGender = document.getElementById('gioitinh-upd').value;
    const updatedBirthDate = document.getElementById('ngaysinh-upd').value;

    const student = students.find(student => student.id == currentStudentId);
    student.ten = updatedName;
    student.mssv = updatedMssv;
    student.email = updatedEmail;
    student.khoa = updatedDepartment;
    student.lop = updatedClass;
    student.gioitinh = updatedGender;
    student.ngaysinh = updatedBirthDate;
    saveToSessionStorage(students);
    students = loadFromSessionStorage();

    showStudents(students);
    displayStudents(currentPage);
    document.getElementById('Inf-UpdateForm').reset();
    document.getElementById('studentFormArea').style.display = 'block';
    document.getElementById('UpdateForm').style.display = 'none';  
    handleKhoaChange();
    currentStudentId = null;
}

// Xóa sinh viên
deleteStudent = (index) => {
    studentIndexToDelete = index;
    document.getElementById('delete-modal').style.display = 'block';
    document.getElementById('backdrop-modal').style.display = 'block';
}

const confirmDelete = () => {
    if (studentIndexToDelete !== null) {
        students.splice(studentIndexToDelete, 1);
        // alert("Đã xóa thành công!");
        saveToSessionStorage(students);
        students = loadFromSessionStorage();
        showStudents(students);
        displayStudents();
        studentIndexToDelete = null;
        document.getElementById('delete-modal').style.display = 'none';
        document.getElementById('backdrop-modal').style.display = 'none';
    }
}

const cancelDelete = () => {
    studentIndexToDelete = null;
    document.getElementById('delete-modal').style.display = 'none';
    document.getElementById('backdrop-modal').style.display = 'none';
}


// Hàm tìm kiếm sinh viên theo tên
const searchStudents = (query) => {
    const normalizedQuery = query.toLowerCase();
    return students.filter(student => student.ten.toLowerCase().includes(normalizedQuery));
};

// Sự kiện click cho button Search
document.getElementById('search-btn').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-text').value;
    document.getElementById('search-text').value = "";
    students = loadFromSessionStorage();
    const result = searchStudents(searchQuery);

    showStudents(result);
    currentPage = 1;
    displayStudents(currentPage,result);
});

// Hàm hiển thị danh sách sinh viên
showStudents = (classList) => {
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = "";

    classList.forEach((student, index) => {
        const row = document.createElement('tr');
        row.classList.add('border-t-2');

        row.innerHTML = `
            <td class="py-3">
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ten}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-['Helvetica'] leading-tight">${student.mssv}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-['Helvetica'] leading-tight">${student.email}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.khoa}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.lop}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-['Helvetica'] leading-tight">${student.gioitinh}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-['Helvetica'] leading-tight">${student.ngaysinh}</p>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <button
                        class="update-btn px-5 py-1 rounded-xl bg-teal-300 text-white  hover:bg-teal-400 active:bg-teal-500"
                        type="button" data-id="${student.id}">Update</button>
                </div>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <button
                        onclick="deleteStudent(${index})"
                        type="button"
                        class="px-5 py-1 rounded-xl bg-red-300 text-white  hover:bg-red-400 active:bg-red-500">Delete</button>                               
                </div>
            </td>
        `;

        studentTableBody.appendChild(row);
    });

    document.querySelectorAll('.update-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            const studentId = event.target.dataset.id;
            currentStudentId = studentId;
            const student = students.find(student => student.id == studentId);
            document.getElementById('ten-upd').value = student.ten;
            document.getElementById('mssv-upd').value = student.mssv;
            document.getElementById('email-upd').value = student.email;
            document.getElementById('khoa-upd').value = student.khoa;
            handleKhoaChange();
            document.getElementById('lop-upd').value = student.lop;
            document.getElementById('gioitinh-upd').value = student.gioitinh;
            document.getElementById('ngaysinh-upd').value = student.ngaysinh;
            document.getElementById('UpdateForm').style.display = 'block';
            document.getElementById('studentFormArea').style.display = 'none';
        });
    });
}

// Cập nhật Selection của Lớp theo selectedKhoa
const updateLopSelects = (selectedKhoa, lopSelects) => {
    lopSelects.forEach(lopSelect => {
        while (lopSelect.firstChild) {
            lopSelect.removeChild(lopSelect.firstChild);
        }

        if (selectedKhoa) {
            lopOptions[selectedKhoa].forEach((lop) => {
                const option = document.createElement('option');
                option.value = lop;
                option.textContent = lop;
                lopSelect.appendChild(option);
            });
        } else {
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Chọn lớp';
            lopSelect.appendChild(defaultOption);
        }
    });
};

// Hàm cập nhật sự thay đổi của Selection Khoa
const handleKhoaChange = () => {
    const khoaSelects = document.querySelectorAll('.khoa-sel');
    const lopSelects = document.querySelectorAll('.lop-sel');

    khoaSelects.forEach(khoaSelect => {
        khoaSelect.addEventListener('change', () => {
            const selectedKhoa = khoaSelect.value;
            updateLopSelects(selectedKhoa, lopSelects);
        });

        if (khoaSelect.value) {
            updateLopSelects(khoaSelect.value, lopSelects);
        }
    });
};

// Gọi sự kiện thay đổi của Selection Khoa 
document.addEventListener('DOMContentLoaded', () => {
    handleKhoaChange();
});


// Hàm set selection của lớp dùng cho bộ lọc
document.addEventListener('DOMContentLoaded', () => {
    const khoaSelectFilter = document.getElementById('khoa-fil');
    const lopSelectFilter = document.getElementById('lop-fil');

    const lopOptionsFilter = {
        CNTT: ['CNTT1', 'CNTT2', 'CNTT3'],
        Fast: ['Fast1', 'Fast2', 'Fast3'],
        "Cơ khí": ['CK1', 'CK2', 'CK3'],
        "Cơ khí giao thông": ['CKGT1', 'CKGT2', 'CKGT3'],
        Hóa: ['Hoa1', 'Hoa2', 'Hoa3'],
        "Môi trường": ['MT1', 'MT2', 'MT3'],
        "Kiến trúc": ['KT1', 'KT2', 'KT3'],
        "Xây dựng": ['XD1', 'XD2', 'XD3']
    };

    const updateLopSelectFilter = (selectedKhoaFilter, lopSelectFilter) => {
        while (lopSelectFilter.firstChild) {
            lopSelectFilter.removeChild(lopSelectFilter.firstChild);
        }

        const defaultOption = document.createElement('option');
        defaultOption.value = 'All';
        defaultOption.textContent = 'All';
        lopSelectFilter.appendChild(defaultOption);

        if (selectedKhoaFilter && selectedKhoaFilter !== 'All') {
            lopOptionsFilter[selectedKhoaFilter].forEach((lopFilter) => {
                const option = document.createElement('option');
                option.value = lopFilter;
                option.textContent = lopFilter;
                lopSelectFilter.appendChild(option);
            });
        }
    }

    khoaSelectFilter.addEventListener('change', () => {
        const selectedKhoaFilter = khoaSelectFilter.value;
        updateLopSelectFilter(selectedKhoaFilter, lopSelectFilter);
    });

    // Cập nhật lớp khi tải trang nếu có khoa được chọn sẵn
    if (khoaSelectFilter.value) {
        updateLopSelectFilter(khoaSelectFilter.value, lopSelectFilter);
    } else {
        // Nếu không có khoa được chọn sẵn, đặt mặc định là 'All'
        updateLopSelectFilter('All', lopSelectFilter);
    }
});

// Thêm năm vào bộ lọc năm
document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('namsinh-fil');

    const selectedYear = () => {
        for (let year = 1900; year <= 2024; year ++) {
            let option = document.createElement("option");
            option.value = year;
            option.text = year;
            yearSelect.appendChild(option);
        }
    }

    selectedYear();
})

// Gán sự kiện click vào button Filter
document.getElementById('filter-btn').addEventListener('click', () => {
    const khoaValue = document.getElementById('khoa-fil').value;
    const lopValue = document.getElementById('lop-fil').value;
    const namsinhValue = document.getElementById('namsinh-fil').value;

    const filteredStudents = students.filter(student => {
        const khoaMatch = (khoaValue === 'All' || student.khoa === khoaValue);
        const lopMatch = (lopValue === 'All' || student.lop === lopValue);

        const studentYear = student.ngaysinh.split('-')[0];
        const namsinhMatch = (namsinhValue === 'All' || studentYear === namsinhValue);

        return khoaMatch && lopMatch && namsinhMatch;
    });

    showStudents(filteredStudents);
    currentPage = 1;
    displayStudents(currentPage,filteredStudents);
});

// Pagination Phân trang
function displayStudents(page = 1, classList = students) {
    const startIndex = (page - 1) * studentsPerPage;
    const endIndex = startIndex + studentsPerPage;
    const studentsToDisplay = classList.slice(startIndex, endIndex);
    currentClassList = classList;

    showStudents(studentsToDisplay); 
    updatePagination(page, classList);
}

// Hàm cập nhật phân trang
function updatePagination(page, classList) {
    const paginationDiv = document.getElementById('page-numbers');
    paginationDiv.innerHTML = '';

    totalPages = Math.ceil(classList.length / studentsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = 'px-4 py-2 bg-gray-200 rounded';
        if (i === page) {
            pageBtn.classList.add('active-page');
        }
        pageBtn.addEventListener('click', () => displayStudents(i, classList));
        paginationDiv.appendChild(pageBtn);
    }

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (page === 1) {
        prevBtn.disabled = true;
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('disabled');
    }

    if (page === totalPages) {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled');
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayStudents(currentPage,currentClassList);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayStudents(currentPage,currentClassList);
    }
});

// Sắp xếp dữ liệu
document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () => {
        let column = th.getAttribute('data-column');
        let order = th.getAttribute('data-order');
        let text = th.textContent.replace(/[▲▼]/g, '').trim(); 
        console.log('Click',column, order, text)

        if (th.textContent.trim() === 'CHỈNH SỬA') {
            return;
        }

        document.querySelectorAll('th').forEach(otherTh => {
            if (otherTh !== th && otherTh.textContent.trim() !== 'CHỈNH SỬA') { // Bỏ qua thẻ th hiện tại
                let otherText = otherTh.textContent.replace(/[▲▼]/g, '').trim();
                otherTh.setAttribute('data-order', 'desc'); // Đặt lại thuộc tính data-order thành 'desc'
                otherTh.innerHTML = otherText + ' &#9650;'; // Thêm mũi tên hướng lên
                otherTh.classList.remove('selected-column'); // Loại bỏ lớp
            }
        });

        // Thêm hoặc thay đổi lớp 'selected-column' cho cột được chọn
        th.classList.add('selected-column');

        if(order == 'desc'){
            th.setAttribute('data-order', 'asc');
            // students = students.sort((a,b) => a[column] > b[column] ?1 :-1)
            students = insertionSort(students, column);
            th.innerHTML = text + ' &#9650;';
        }else{
            th.setAttribute('data-order', 'desc');
            // students = students.sort((a,b) => a[column] < b[column] ?1 :-1)
            students = insertionSort(students.reverse(), column).reverse(); 
            th.innerHTML = text + ' &#9660;';
        }

        showStudents(students);
        displayStudents();
    });
});
// Insertion Sort
function insertionSort(arr, column) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j][column] > current[column]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// lưu dữ liệu vào SessionStorage
saveToSessionStorage = (students) => {
    sessionStorage.setItem('students', JSON.stringify(students));
}

// lấy dữ liệu từ SessionStorage
loadFromSessionStorage = () => {
    const storedStudents = sessionStorage.getItem('students');
    return storedStudents ? JSON.parse(storedStudents) : [];
}

// Lấy dữ liệu id
determineNextStudentId = () => {
    if (students.length === 0) {
        return 1;
    }
    const maxId = students.reduce((max, student) => Math.max(max, student.id), 0);
    return maxId + 1;
}

// Gọi hàm render lần đầu để hiển thị dữ liệu mẫu 
renderStudents();
