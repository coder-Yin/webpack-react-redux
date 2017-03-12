
let url = `1/v2/learn/userSimplePretestResult`;

export function postPreEasy(postData) {
  return $.ajax({
    url,
    data: postData,
    type: 'POST',
    dataType: 'json',
    cache: false
  });
}
