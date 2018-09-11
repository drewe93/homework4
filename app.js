const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];
  const userCommand = prompt('Please input one of the following commands:\nprint\nverify\nlookup\ncontains\nupdate\nadd\ndelete\nsort');

  if(userCommand.toLowerCase()==="print"){
    for(i=0;i<employeeList.length;i++){
      render("Name: "+employeeList[i].name);
      render("Office #: "+employeeList[i].officeNum);
      render("Phone: "+employeeList[i].phoneNum);
      render("-----------");
    }
  }
  else if(userCommand.toLowerCase()==="verify"){
    let userInput = prompt("Please input a employee name.");
    let exists = false;
    for(i=0;i<employeeList.length; i++){
      if(employeeList[i].name.toLowerCase() === userInput.toLowerCase()){
        exists = true;
      }
    }
    render(exists);
  }
  else if(userCommand.toLowerCase()==="lookup"){
    let userInput = prompt("Please input a employee name.");
    for(i=0;i<employeeList.length; i++){
      if(employeeList[i].name.toLowerCase() === userInput.toLowerCase()){
        render("Name: "+employeeList[i].name);
        render("Office #: "+employeeList[i].officeNum);
        render("Phone: "+employeeList[i].phoneNum);
      }
    }
  }
  else if(userCommand.toLowerCase()==="contains"){
    let userInput = prompt("Please input a string.");
    for(i=0;i<employeeList.length; i++){
      if(employeeList[i].name.toLowerCase().includes(userInput.toLowerCase()) === true){
        render("Name: "+employeeList[i].name);
        render("Office #: "+employeeList[i].officeNum);
        render("Phone: "+employeeList[i].phoneNum);
        render("----------");
      }
    }
  }
  else if(userCommand.toLowerCase()==="update"){
    let userInput = prompt("Please input a name.");
    let userField = prompt("Please input a field you would like to update.");
    let userValue = prompt("Please input the value you would like to update with")
    for(i=0;i<employeeList.length; i++){
      if(employeeList[i].name.toLowerCase() === userInput.toLowerCase()){
        if(userField.toLowerCase().includes("phone")){
          employeeList[i].phoneNum = userValue;
        }
        else if(userField.toLowerCase().includes("na")){
          employeeList[i].name = userValue;
        }
        else if(userField.toLowerCase().includes("office")){
          employeeList[i].officeNum = userValue;
        }
        else{
          render('Invalid field selected');
        }
        render("Name: "+employeeList[i].name);
        render("Office #: "+employeeList[i].officeNum);
        render("Phone: "+employeeList[i].phoneNum);
        render("----------");
      }
    }
  }
  else if(userCommand.toLowerCase()==="add"){
    let userName = prompt("Please input a name.");
    let userOffice = prompt("Please input the office number.");
    let userPhone = prompt("Please input the phone number.")
    let newEmployee = {
      name: userName,
      officeNum: userOffice,
      phoneNum: userPhone
    }
    employeeList.push(newEmployee);
    for(i=0;i<employeeList.length;i++){
      render("Name: "+employeeList[i].name);
      render("Office #: "+employeeList[i].officeNum);
      render("Phone: "+employeeList[i].phoneNum);
      render("-----------");
    }
  }
  else if(userCommand.toLowerCase()==="delete"){
    let userName = prompt("Please input a name.");
    for(i=0;i<employeeList.length; i++){
      if(employeeList[i].name.toLowerCase() === userName.toLowerCase()){
        employeeList.splice(i,1);
      }
    }
    for(i=0;i<employeeList.length;i++){
      render("Name: "+employeeList[i].name);
      render("Office #: "+employeeList[i].officeNum);
      render("Phone: "+employeeList[i].phoneNum);
      render("-----------");
    }
  }
  else if(userCommand.toLowerCase()==="sort"){
    employeeList.sort();
    for(i=0;i<employeeList.length;i++){
      render("Name: "+employeeList[i].name);
      render("Office #: "+employeeList[i].officeNum);
      render("Phone: "+employeeList[i].phoneNum);
      render("-----------");
    }
  }
  else{
    render('Not a valid command');
  }
