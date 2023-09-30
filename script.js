var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers: true,
    start: "38% 50%",
    end: "90% 50%",
    scrub: 2,
    pin: true,
  },
});
tl.to(
  ".text",
  {
    top: "3%",
  },
  "a"
)
  .to(
    "#card-one",
    {
      top: "45%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "140%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "52%",
    },
    "b"
  )
  .to(
    "#card-one",
    {
      width: "45%",
      height: "45vh",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "140%",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "60%",
    },
    "c"
  )
  .to(
    "#card-two",
    {
      width: "50%",
      height: "50vh",
    },
    "c"
  );

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    // markers: true,
    start: "20% 50%",
    end: "40% 55%",
    scrub: 2,
    pin: true,
  },
});
t2.to(
  "#image-anim-1",
  {
    opacity: 0,
  },
  "a"
).to(
  ".image-anim",
  {
    rotateX: "0deg",
    top: "-1vh",
  },
  "a"
);

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part2",
    // markers: true,
    start: "0% 90%",
    end: "200% 90%",
    scrub: true,
  },
});

t3.to(
  ".strip-l",
  {
    marginLeft: "0%",
  },
  "a"
);
t3.to(
  ".strip-r",
  {
    marginLeft: "-50%",
  },
  "a"
);
