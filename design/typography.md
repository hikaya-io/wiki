<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet">


<span style="font-family:Lato; font-size:26px; font-weight:400;">We use Lato for title and body.</span>

### link

```
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
```

### CSS

```
$main-font-family: 'Lato', san-serif;
```

#### Title - Lato B48
```
.title {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  color: $dark-body-grey;
}
```


####  Heading - Lato B35
```
.heading {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 42px;
  color: $heading-grey;
}
```

#### Body Bold - Lato B18
```
.body-bold {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: $dark-body-grey;
}
```

#### Body 2 Bold - Lato B22
```
.body-2-bold {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: $dark-body-grey;
}
```
#### Body Reg - Lato R18
```
.body-reg {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: $dark-body-grey;
}
```
#### Body 2 Reg - Lato R22
```
.body-2-reg {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: $dark-body-grey;
}
```
#### Footer - Lato R15
```
.footer {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: $dark-body-grey;
}
```

#### Info - Lato R11
```
.info {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: $info-color;
}
```

## Other font classes
```
.plain-style {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
```
```
.ws-button {
  color: $primary-color;
  font-family: $main-font-family;
}
```
```
.button-style {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: transparent;
  padding: 11px 33px;
  color: $white;
}
```
```
.h-border {
  border-radius: 5px;
}
```
```
.card-shadow {
  background: #FFFFFF;
  box-shadow: 0px 0px 17px rgba(115, 117, 129, 0.25);
  // border-radius: 20px;
}
```
```
.button-pill {
  width: 110px;
  border-radius: 25px;

  .el-checkbox-button__inner {
    border-radius: 25px !important;
    border-color: transparent;
  }
}
```