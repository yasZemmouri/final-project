export const MoneyLayout=(num)=> {
  let prefix=''
  if(num/1000000000>1){
      num /=1000000000;
      prefix = 'B'
    }else if(num/1000000>1){
      num /=1000000;
      prefix = 'M';
    }
    num = (num).toLocaleString('en-US',{
      style: 'currency',
      currency:'USD'
    })
    return num+prefix;
}

export const CountLayout=(num)=> {
  if(num/1000000000>1){
    num /=1000000000;
    num = num.toLocaleString()+'B'
  }else if(num/1000000>1){
    num /=1000000;
    num = num.toLocaleString()+'M'
  }else {console.log(num);}
  return num

}
