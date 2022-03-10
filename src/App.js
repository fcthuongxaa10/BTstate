import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react';
import data from './data.json'
function App()  {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    TenHang:'',
    SoLuong:'',
    DonGia:''
  });



  const handleAddFormChange = (event) =>
  {
      event.preventDefault();
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
      const newFormData = {...addFormData};
      newFormData[fieldName] = fieldValue;
      setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) =>
  {
      event.preventDefault();
      const newContact = {
        TenHang:addFormData.TenHang,
        SoLuong:addFormData.SoLuong,
        DonGia:addFormData.DonGia
      }
      const newContacts=[...contacts,newContact];
      setContacts(newContacts);
  }

  const handleAddFormSubmitDSH = (event) =>
  {
      event.preventDefault();
      const newContact = {
        TenHang:addFormData.TenHang,
        SoLuong:addFormData.SoLuong,
        DonGia:addFormData.DonGia
      }
      const newContacts=[...contacts,newContact];
      setContacts(newContacts);
  }
  const handleDeleteClick = (contactId) =>
  {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  } 

  const handleDeleteClickCT = (contactId) =>
  {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  } 
  // useEffect(() => {
  //   if (contacts) {
  //     let isValid = true;
  //     const patt = /^[\w]*$/;
  //     const pattNumber = /^[0-9]*$/;
  //     const newSearchForm = { ...contacts };
  //     if (patt.test(newSearchForm.name)) {
  //       newSearchForm.nameErr = '';
  //     } else {
  //       newSearchForm.nameErr = 'errosr';
  //       isValid = false;
  //     }

  //     if (pattNumber.test(newSearchForm.minPrices)) {
  //       newSearchForm.minPricesErr = '';
  //     } else {
  //       newSearchForm.minPricesErr = 'errosr';
  //       isValid = false;
  //     }
  //     if (pattNumber.test(newSearchForm.maxPrices)) {
  //       newSearchForm.maxPricesErr = '';
  //     } else {
  //       newSearchForm.maxPricesErr = 'errosr';
  //       isValid = false;
  //     }
  //     setSearchForm(contacts);
  //     if (isValid) {
  //       let newDisplayData = [...data];
  //       if (newSearchForm.name) {
  //         newDisplayData = newDisplayData.filter((dt) => dt.name.includes(newSearchForm.name));
  //       }
  //       if (newSearchForm.Category !== 'all') {
  //         newDisplayData = newDisplayData.filter((dt) => dt.Category === newSearchForm.Category);
  //       }
  //       if (newSearchForm.minPrices) {
  //         newDisplayData = newDisplayData.filter((dt) => dt.price >= newSearchForm.minPrices);
  //       }
  //       if (newSearchForm.maxPrices) {
  //         newDisplayData = newDisplayData.filter((dt) => dt.price <= newSearchForm.maxPrices);
  //       }
  //       setDisplayData(contacts);
  //     } else {
  //       setDisplayData(data);
  //     }
  //   }
  // }, )
  return (
    <div className="App">
      <form action="" class="Form d-flex">
        <form action="" class="FormTT p-l-5">
          <div>Thong Tin Dat Hang</div>
          <div class="row">
            <div class="col">
              <label for="formGroupExampleInput">Ho Va Ten</label>
              <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col">
              <label for="formGroupExampleInput">CMND</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
            <div class="col">
              <label for="formGroupExampleInput">Ngay Dat hang</label>
              <input type="date" class="form-control" placeholder="Last name" />
            </div>
            <div class="col">
              <label for="formGroupExampleInput">Dia Chi</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
        </form>
        <form onSubmit={handleAddFormSubmit} class="FormCT d-flex">
          <div class="row">
            <div class="col">
              <label for="formGroupExampleInput">#</label>
            </div>
            <div class="col">
              <label for="formGroupExampleInput">Ten Hang Hoa</label>
              <input type="text" name="TenHang" class="form-control" placeholder="First name" onChange={handleAddFormChange} />
            </div>
            <div class="col">
              <label for="formGroupExampleInput">So Luong</label>
              <input type="text" name="SoLuong" class="form-control" placeholder="Last name" onChange={handleAddFormChange}/>
            </div>
            <div class="col">
              <label for="formGroupExampleInput">Đơn giá</label>
              <input type="text" name='DonGia' class="form-control" placeholder="Last name" onChange={handleAddFormChange}/>
            </div>
            <table>
        <thead>
          <tr>
            <th>TenHang</th>
            <th>SoLuong</th>
            <th>DonGia</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.TenHang}</td>
              <td>{contact.SoLuong}</td>
              <td>{contact.DonGia}</td>
            </tr>
          ))}
        </tbody>
      </table>
              <button type="submit" onClick={handleAddFormSubmit}>Add </button>
              <button type="submit">DEL</button>     
          </div>
        </form>
      </form>
      <button class="DatHang">Đặt Hàng</button>
      <div class="DanhSach">Danh Sach Dat Hang</div>
      <form action="" class="FormDH d-flex">
        <form action="" class="DangXL">
            <div className="">Dang Cho Xu Li</div>
            <form action="" class="DangXL1">
              <div>Tên: Hồ Lĩnh</div>
              <div>Ngày Đặt:22/01/2021</div>
              <div>Địa chỉ:Nam Kì</div>
              <div></div>
              <button>Chi Tiet Don Hang</button>
              </form>
              <button>Add</button>
              <button>DEL</button>
          </form>
          <form action="" class="HoanThanh">
            <div className="">Hoan Thanh</div>
            <form action="" class="HoanThanh1">
            <div>Tên: Thuong</div>
              <div>Ngày Đặt:02/02/1999</div>
              <div>Địa chỉ:Quang Nam</div>
              <div></div>
              <button>Chi Tiet Don Hang</button>
              </form>
              <button>Add</button>
              <button>DEL</button>
          </form>
      </form>
      <form action="" class="ChiTietHD">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Ten Hang Hoa</th>
              <th scope="col">So Luong</th>
              <th scope="col">Don Gia</th>
              <th scope="col">Thanh Tien</th>
              <th scope="col">Tong Tien</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Hoa</th>
              <td>2</td>
              <td>30000</td>
              <td>60000</td>
              <td>60000</td>
            </tr>
          </tbody>
        </table>

      </form>
    </div>
  );
  }
export default App;
