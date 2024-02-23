# GET PUBLISHED



Post preview component: 
    Props:
        title,
        id,
        description,
        created_at,
        author_id;
    Sub components:
    Time from date(show how much time left since specific date)
    Author name(fetch user name from kinde api)
    Read time calculator(Calculate the Estimated Reading Time of an Article)
    Like button:
        Sub components:
        Like counter(fetch info from db about how many likes exists with that post id);
        Liking button(like and unlike post via creating/deleting document in likes table)
