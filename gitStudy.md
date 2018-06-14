# git使用
## 一、git初始化用户名和邮箱
### git config --global user.name 你的英文名
### git config --global user.email 你的邮箱
### git config --global push.default matching
### git config --global core.quotepath false
### git config --global core.editor "vim"
初始化完成后，
1： 进入
### $ vi ~/.gitconfig; 查看，
按ESC ：q 回车 退出查看；
或者
2：
### $  git config --list  进行查看；

如果你以前设置有用户名和邮箱，可以按以下两行代码修改或者直接用以前的用户名和邮箱；
### $  git config --global --replace-all user.email "输入你的邮箱" 
### $  git config --global --replace-all user.name "输入你的用户名"
## 二、用git创建一个本地仓库
1：创建一个文件夹当做你的本地仓库；命令
### $ mkdir git-demo-1
2: 进入文件目录；命令
### $ cd git-demo-1
 3: 创建一个.git目录；
命令
### $ git init （此命令会初始化一个Git仓库）
4: 使用命令 
### $ ls -la (查看是否创建.git目录)
5：在仓库里写入一个文件，例如在命令行输入以下
### $ mkdir css
### $ touch css/style.css
### $ touch index.html
### $ touch 1.txt
这是一个文件夹和三种类型文件；
接着，可以在文件中写一些内容：打开index.html文件： 
### $ start index.html  （window下git命令）
然后系统会用默认程序打开此文件，然后你在里面修改内容并保存；输入命令:
 ### $ git stats -sb （此命令用来查看此时文件状态）
会显示 M index.html (M为红色，表示此文件有变动)；输入命令 
### $ git add index.html （保存此文件到git缓存）
输入命令 
### $ git stats -sb 
会显示 M index.html (M为绿色，表示此文件变动已记录)；输入命令
 ### $ git commit -m  (提交此次文件修改到git仓库；) 
# 三：在gitHub上新建一个新仓库git-demo-1连接到本地仓库git-demo-1；
1:打开自己的github页面，点击仓库，进入仓库页面，新建一个仓库；到达下面页面：

<img></img>

找到图中的
 ### 「…or push an existing repository from the command line」
这一行；复制下面两行代码到git并运行；然后刷新github页面，就链接成功了。
## 鼓掌鼓掌鼓掌！！！
