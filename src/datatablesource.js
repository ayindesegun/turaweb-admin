export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "businessName",
      headerName: "Business Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            {params.row.businessName}
          </div>
        );
      },
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 230,
    },
  
    {
      field: "walletBalance",
      headerName: "Wallet Balance",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.email}
          </div>
        );
      },
    },
  ];

  export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "productName",
      headerName: "Product Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.imageUrl} alt="avatar" />
            {params.row.productName}
          </div>
        );
      },
    },
    {
      field: "unitPrice",
      headerName: "Price (₦)",
      width: 230,
    },
  
    {
      field: "sizePerMeasurement",
      headerName: "Weight (Kg)",
      width: 100,
    },
    {
      field: "stockValue",
      headerName: "Stock",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.stockValue}`}>
            {params.row.stockValue}
          </div>
        );
      },
    },
  ];
  
  export const orderColumns = [
    { field: "cart[0].productId", headerName: "ID", width: 70 },
    {
      field: "[0][0].cart[0].productName",
      headerName: "Product Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.imageUrl} alt="avatar" />
            {params.row.productName}
          </div>
        );
      },
    },
    {
      field: "unitPrice",
      headerName: "Price (₦)",
      width: 230,
    },
  
    {
      field: "sizePerMeasurement",
      headerName: "Weight (Kg)",
      width: 100,
    },
    {
      field: "stockValue",
      headerName: "Stock",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.stockValue}`}>
            {params.row.stockValue}
          </div>
        );
      },
    },
  ];
  //temporary data
 