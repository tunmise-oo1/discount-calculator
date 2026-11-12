function calculateddiscount() {
  let salesprice = document.getElementById('bill').value
  let discount = document.getElementById('percentage').value

  let discountprice = salesprice * (discount / 100)
  let totalprice = salesprice - discount


  document.getElementById('result-discount').innerHTML = 'Your Discount Is N' + discountprice
  document.getElementById('result-total').innerHTML = 'You Will Pay N' + totalprice
  console.log(discountprice, totalprice)

  document.getElementById('bill').value = ""
  document.getElementById('percentage').value = ""

}
