const searchBookWithNaver = async (isbn: string) => {
  try {
    const response = await fetch(`/api/search/book?isbn=${isbn}`);

    if (!response.ok) {
      throw new Error('검색에 실패했습니다.');
    }

    // 서버가 이미 JSON으로 바꿔서 주므로 바로 사용 가능!
    const data = await response.json();

    console.log('변환된 책 정보:', data);
  } catch (error) {
    console.error(error);
    alert('책을 불러오지 못했어요.');
  }
};

export default searchBookWithNaver;
