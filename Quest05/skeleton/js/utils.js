const type = (target, type) => {
  if (typeof type == "string") {
    if (typeof target !== type) throw `invalid type ${target} : ${type}`;
  } else if (!(target instanceof type))
    throw `invalid type ${target} : ${type}`;
  return target;
};

const el = el => document.createElement(el);

const stringToEl = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;

  return el;
};

const qs = (query) => document.querySelector(query);



