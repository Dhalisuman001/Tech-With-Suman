import React from "react";

const ContentBlock = ({ block }) => {
  console.log(block);
  const { data, type } = block;

  const Img = ({ url, caption }) => {
    return (
      <div>
        <img src={url} alt="test" />
        {caption && (
          <p className="w-full text-center my-2 md:mb-8 text-base text-gray-800">
            {caption}
          </p>
        )}
      </div>
    );
  };
  const Quote = ({ quote, caption }) => {
    return (
      <div className="border-l-4 border-l-purple-800 bg-purple-100 p-2 pl-5">
        <p className="text-xl md:text-2xl leading-10  text-gray-800">{quote}</p>
        {caption && (
          <p className="w-full my-2 md:mb-8 text-base text-purple-800">
            {caption}
          </p>
        )}
      </div>
    );
  };

  switch (type) {
    case "paragraph":
      return <p dangerouslySetInnerHTML={{ __html: data.text }}></p>;

    case "list":
      if (data.style === "ordered") {
        return (
          <ul className="list-decimal">
            {data?.items?.map((text, i) => (
              <li
                className="mt-2"
                key={i}
                dangerouslySetInnerHTML={{ __html: text }}
              ></li>
            ))}
          </ul>
        );
      }

      return (
        <ol className="list-disc">
          {data?.items?.map((text, i) => (
            <li
              className="mt-2"
              key={i}
              dangerouslySetInnerHTML={{ __html: text }}
            ></li>
          ))}
        </ol>
      );

    case "header":
      if (data.level === 3) {
        return (
          <h5
            dangerouslySetInnerHTML={{ __html: data.text }}
            className=" text-xl font-bold"
          ></h5>
        );
      }
      return (
        <h4
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-2xl font-bold"
        ></h4>
      );
    case "image":
      return <Img url={data.file.url} caption={data.caption}></Img>;

    case "quate":
      return <Quote quote={data.text} caption={data.caption}></Quote>;

    case "code":
      return (
        <pre className="bg-gray-100 p-3">
          <code>{data.code}</code>
        </pre>
      );

    default:
      break;
  }
};

/* <pre className="bg-gray-100 p-3">
  <code>{data.code}</code>
</pre>; */

export default ContentBlock;
